namespace SavingsUP.Application.DTOs.Categoria;

public class CategoriaResponse
{
    public required Guid Id { get; set; }

    public required string Description { get; set; } 

    public required string Purpose { get; set; }
}