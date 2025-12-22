using SavingsUP.Application.DTOs.Categoria;
using SavingsUP.Application.Interfaces;
using SavingsUP.Domain.Entities;
using SavingsUP.Domain.Interfaces;

namespace SavingsUP.Application.Services;

public class CategoriaService : ICategoriaService
{
    private readonly ICategoriaRepository _repository;

    public CategoriaService(ICategoriaRepository repository)
    {
        _repository = repository;
    }

    public async Task<CategoriaResponse> CreateCategoryAsync(CreateCategoriaRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.Description))
            throw new ArgumentException("A descrição da categoria não pode ser vazia.");

        var categoria = new Categoria
        {
            Description = request.Description,
            Purpose = request.Purpose
        };

        categoria = await _repository.AddAsync(categoria);

        return new CategoriaResponse { 
            Id = (Guid)categoria.Id!,
            Description = categoria.Description,
            Purpose = categoria.Purpose
        };
    }

    public async Task<List<CategoriaResponse>> GetAllCategoriesAsync()
    {
        var categorias = await _repository.GetAllAsync();

        return categorias.Select(c => new CategoriaResponse{
            Description = c.Description,
            Id = (Guid)c.Id!,
            Purpose = c.Purpose

        }).ToList();
    }
}