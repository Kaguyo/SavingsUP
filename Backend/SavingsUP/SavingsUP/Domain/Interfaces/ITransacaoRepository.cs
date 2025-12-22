using SavingsUP.Application.DTOs.Transacao;
using SavingsUP.Domain.Entities;

namespace SavingsUP.Domain.Interfaces
{
    public interface ITransacaoRepository
    {
        Task<Transacao> AddAsync(Transacao transaction);
        Task<IEnumerable<Transacao>> GetAllAsync();
        Task<IEnumerable<Transacao>> GetByCategoriesAsync(List<Guid> categoriesIds);
        Task<IEnumerable<Transacao>> GetByPeopleAsync(List<Guid> peopleIds);

    }
}
