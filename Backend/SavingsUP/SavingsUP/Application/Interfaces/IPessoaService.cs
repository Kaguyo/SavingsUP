using SavingsUP.Application.DTOs.Pessoa;

namespace SavingsUP.Application.Interfaces
{
    public interface IPessoaService
    {
        Task<PessoaResponse> CreatePersonAsync(CreatePessoaRequest personRequest);
        Task<List<PessoaResponse>> GetAllPeopleAsync();
        Task DeletePersonByIdAsync(string personId);
    }
}
