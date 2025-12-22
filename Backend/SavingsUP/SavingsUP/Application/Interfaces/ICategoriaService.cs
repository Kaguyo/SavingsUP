using SavingsUP.Application.DTOs.Categoria;

namespace SavingsUP.Application.Interfaces
{
    public interface ICategoriaService
    {
        Task<CategoriaResponse> CreateCategoryAsync(CreateCategoriaRequest category);
        Task<List<CategoriaResponse>> GetAllCategoriesAsync();
    }
}
