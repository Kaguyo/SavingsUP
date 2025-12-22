using SavingsUP.Application.DTOs.Categoria;
using SavingsUP.Domain.Entities;

namespace SavingsUP.Domain.Interfaces
{
    public interface ICategoriaRepository
    {
        Task<Categoria> AddAsync(Categoria category);
        Task<IEnumerable<Categoria>> GetAllAsync();
    }
}
