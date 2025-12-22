using SavingsUP.Domain.Entities;

namespace SavingsUP.Domain.Interfaces
{
    public interface IPessoaRepository
    {
        Task<bool> DeleteByIdAsync(Guid personId);
        Task<Pessoa> AddAsync(Pessoa person);
        Task<IEnumerable<Pessoa>> GetAllAsync();
        Task<Pessoa?> GetByIdAsync(Guid personId);
    }
}
