using SavingsUP.Application.DTOs.Transacao;
using SavingsUP.Application.Interfaces;
using SavingsUP.Domain.Entities;
using SavingsUP.Domain.Interfaces;

namespace SavingsUP.Application.Services;

public class TransacaoService : ITransacaoService
{
    private readonly ITransacaoRepository _repository;
    private readonly IPessoaRepository _pessoaRepository;
    private readonly ICategoriaRepository _categoriaRepository;

    public TransacaoService(
        ITransacaoRepository repository,
        IPessoaRepository pessoaRepository,
        ICategoriaRepository categoriaRepository)
    {
        _repository = repository;
        _pessoaRepository = pessoaRepository;
        _categoriaRepository = categoriaRepository;
    }

    public async Task<TransacaoResponse> CreateTransactionAsync(CreateTransacaoRequest request)
    {
        var pessoa = await _pessoaRepository.GetByIdAsync(request.PessoaId);
        if (pessoa == null) throw new ArgumentException("Pessoa informada não existe.");

        var transacao = new Transacao
        {
            Description = request.Description,
            Value = (decimal)request.Value,
            Type = request.Type,
            PessoaId = request.PessoaId,
            CategoriaId = request.CategoriaId
        };

        transacao.ValidarRegraIdade(pessoa.Age);

        var transacaoSalva = await _repository.AddAsync(transacao);

        return new TransacaoResponse
        {
            Id = (Guid)transacaoSalva.Id,
            Description = transacaoSalva.Description,
            Value = transacaoSalva.Value,
            Type = transacaoSalva.Type,
            PessoaId = transacaoSalva.PessoaId,
            CategoriaId = transacaoSalva.CategoriaId
        };
    }

    public async Task<List<TransacaoResponse>> GetAllTransactionsAsync()
    {
        var transacoes = await _repository.GetAllAsync();

        return transacoes.Select(t => new TransacaoResponse
        {
            Id = (Guid)t.Id,
            Description = t.Description,
            Value = t.Value,
            Type = t.Type,
            PessoaId = t.PessoaId,
            CategoriaId = t.CategoriaId
        }).ToList();
    }

    public async Task<List<TransacaoResponse>> GetTransactionsByPeopleIdsAsync(string[] peopleIds)
    {
        var guids = peopleIds.Select(Guid.Parse).ToList();
        var transacoes = await _repository.GetByPeopleAsync(guids);

        return transacoes.Select(t => new TransacaoResponse
        {
            Id = (Guid)t.Id,
            Description = t.Description,
            Value = t.Value,
            Type = t.Type,
            PessoaId = t.PessoaId,
            CategoriaId = t.CategoriaId
        }).ToList();
    }

    public async Task<List<TransacaoResponse>> GetTransactionsByCategoriesIdsAsync(string[] categoriesIds)
    {
        var guids = categoriesIds.Select(Guid.Parse).ToList();
        var transacoes = await _repository.GetByCategoriesAsync(guids);

        return transacoes.Select(t => new TransacaoResponse
        {
            Id = (Guid)t.Id,
            Description = t.Description,
            Value = t.Value,
            Type = t.Type,
            PessoaId = t.PessoaId,
            CategoriaId = t.CategoriaId
        }).ToList();
    }
}