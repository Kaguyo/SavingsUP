using Microsoft.AspNetCore.Mvc;
using SavingsUP.Application.DTOs.Pessoa;
using SavingsUP.Application.Interfaces;

namespace SavingsUP.API.Endpoints;

public static class PessoasEndpoints
{
    public static void MapPessoasEndpoints(this IEndpointRouteBuilder app)
    {
        // CREATE
        app.MapPost("/pessoas", async ([FromBody] CreatePessoaRequest request, IPessoaService service) =>
        {
            try
            {
                var response = await service.CreatePersonAsync(request);
                return Results.Created($"/pessoas/{response.Id}", response);
            }
            catch (ArgumentException ex)
            {
                return Results.BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Pessoas");

        // GET ALL
        app.MapGet("/pessoas", async (IPessoaService service) =>
        {
            try
            {
                var people = await service.GetAllPeopleAsync();
                return Results.Ok(people);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Pessoas");

        // DELETE
        app.MapDelete("/pessoas/{id}", async (string id, IPessoaService service) =>
        {
            try
            {
                await service.DeletePersonByIdAsync(id);
                return Results.NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return Results.NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Pessoas");
    }
}