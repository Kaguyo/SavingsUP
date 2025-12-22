using SavingsUP.Application.DTOs.Transacao;

namespace SavingsUP.Application.Interfaces
{
    public interface ITransacaoService
    {
        Task<TransacaoResponse> CreateTransactionAsync(CreateTransacaoRequest transactionRequest);
        Task<List<TransacaoResponse>> GetAllTransactionsAsync();
        Task<List<TransacaoResponse>> GetTransactionsByPeopleIdsAsync(string[] peopleIds);
        Task<List<TransacaoResponse>> GetTransactionsByCategoriesIdsAsync(string[] categoriesIds);
    }
}
