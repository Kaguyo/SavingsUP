using SavingsUP.Application.DTOs.Pessoa;
using SavingsUP.Application.Interfaces;
using SavingsUP.Domain.Entities;
using SavingsUP.Domain.Interfaces;

namespace SavingsUP.Application.Services;

public class PessoaService : IPessoaService
{
    private readonly IPessoaRepository _repository;

    public PessoaService(IPessoaRepository repository)
    {
        _repository = repository;
    }

    public async Task<PessoaResponse> CreatePersonAsync(CreatePessoaRequest personRequest)
    {
        // Validação simples seguindo o seu padrão
        if (string.IsNullOrWhiteSpace(personRequest.Name))
            throw new ArgumentException("O nome da pessoa não pode ser vazio.");

        var pessoa = new Pessoa
        {
            Name = personRequest.Name,
            Age = personRequest.Age
        };

        var pessoaCriada = await _repository.AddAsync(pessoa);

        return new PessoaResponse
        {
            Id = (Guid)pessoaCriada.Id!,
            Name = pessoaCriada.Name,
            Age = pessoaCriada.Age
        };
    }

    public async Task<List<PessoaResponse>> GetAllPeopleAsync()
    {
        var people = await _repository.GetAllAsync();

        return people.Select(p => new PessoaResponse
        {
            Id = (Guid)p.Id!,
            Name = p.Name,
            Age = p.Age
        }).ToList();
    }

    public async Task DeletePersonByIdAsync(string personId)
    {
        if (!Guid.TryParse(personId, out var guidId))
            throw new ArgumentException("O ID fornecido é inválido.");

        // Verifica se existe antes de deletar para cair no catch de KeyNotFound se necessário
        var pessoa = await _repository.GetByIdAsync(guidId);
        if (pessoa == null)
            throw new KeyNotFoundException("Pessoa não encontrada.");

        await _repository.DeleteByIdAsync(guidId);
    }
}