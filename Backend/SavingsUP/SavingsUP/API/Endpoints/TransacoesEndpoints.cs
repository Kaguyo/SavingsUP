using Microsoft.AspNetCore.Mvc;
using SavingsUP.Application.DTOs.Transacao;
using SavingsUP.Application.Interfaces;

namespace SavingsUP.API.Endpoints;

public static class TransacoesEndpoints
{
    public static void MapTransacoesEndpoints(this IEndpointRouteBuilder app)
    {
        // CREATE
        app.MapPost("/transacoes", async ([FromBody] CreateTransacaoRequest transacaoRequest, ITransacaoService service) =>
        {
            try
            {
                var response = await service.CreateTransactionAsync(transacaoRequest);
                return Results.Created($"/transacoes/{response.Id}", response);
            }
            catch (ArgumentException ex)
            {
                return Results.BadRequest(ex.Message);
            }
            catch (InvalidOperationException ex)
            {
                return Results.BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Transações");

        // GET ALL
        app.MapGet("/transacoes", async (ITransacaoService service) =>
        {
            try
            {
                var transactions = await service.GetAllTransactionsAsync();
                return Results.Ok(transactions);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Transações");

        // GET BY PEOPLE IDS
        app.MapGet("/pessoas/transacoes", async ([FromQuery] string[] ids, ITransacaoService service) =>
        {
            try
            {
                var transactions = await service.GetTransactionsByPeopleIdsAsync(ids);
                return Results.Ok(transactions);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Transações");

        // GET BY CATEGORIES IDS
        app.MapGet("/categorias/transacoes", async ([FromQuery] string[] ids, ITransacaoService service) =>
        {
            try
            {
                var transactions = await service.GetTransactionsByCategoriesIdsAsync(ids);
                return Results.Ok(transactions);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Transações");
    }
}