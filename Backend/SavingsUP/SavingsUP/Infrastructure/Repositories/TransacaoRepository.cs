using Microsoft.EntityFrameworkCore;
using SavingsUP.Domain.Entities;
using SavingsUP.Domain.Interfaces;
using SavingsUP.Infrastructure.Contexts;
using System;

namespace SavingsUP.Infrastructure.Repositories
{
    public class TransacaoRepository(ApplicationDbContext db) : ITransacaoRepository
    {
        async Task<Transacao> ITransacaoRepository.AddAsync(Transacao transaction)
        {
            await db.Transacoes.AddAsync(transaction);
            await db.SaveChangesAsync();

            return transaction;
        }

        async Task<IEnumerable<Transacao>> ITransacaoRepository.GetAllAsync()
        {
            return await db.Transacoes.ToListAsync();
        }

        async Task<IEnumerable<Transacao>> ITransacaoRepository.GetByCategoriesAsync(List<Guid> categoriesIds)
        {
            return await db.Transacoes
                .Where(t => categoriesIds.Contains(t.CategoriaId))
                .ToListAsync();
        }

        async Task<IEnumerable<Transacao>> ITransacaoRepository.GetByPeopleAsync(List<Guid> peopleIds)
        {
            return await db.Transacoes
                .Where(t => peopleIds.Contains(t.PessoaId))
                .ToListAsync();
        }
    }
}