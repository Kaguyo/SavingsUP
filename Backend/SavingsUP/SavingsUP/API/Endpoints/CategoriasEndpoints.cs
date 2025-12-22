using Microsoft.AspNetCore.Mvc;
using SavingsUP.Application.DTOs.Categoria;
using SavingsUP.Application.Interfaces;

namespace SavingsUP.API.Endpoints;

public static class CategoriasEndpoints
{
    public static void MapCategoriasEndpoints(this IEndpointRouteBuilder app)
    {
        // CREATE
        app.MapPost("/categorias", async ([FromBody] CreateCategoriaRequest request, ICategoriaService service) =>
        {
            try
            {
                var response = await service.CreateCategoryAsync(request);
                return Results.Created($"/categorias/{response.Id}", response);
            }
            catch (ArgumentException ex)
            {
                return Results.BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Categorias");

        // GET ALL
        app.MapGet("/categorias", async (ICategoriaService service) =>
        {
            try
            {
                var categories = await service.GetAllCategoriesAsync();
                return Results.Ok(categories);
            }
            catch (Exception ex)
            {
                return Results.Problem(ex.Message, statusCode: 500);
            }
        }).WithTags("Categorias");
    }
}