using Microsoft.EntityFrameworkCore;
using SavingsUP.Domain.Entities;
using SavingsUP.Domain.Interfaces;
using SavingsUP.Infrastructure.Contexts;

namespace SavingsUP.Infrastructure.Repositories
{
    public class PessoaRepository(ApplicationDbContext db) : IPessoaRepository
    {
        public async Task<Pessoa> AddAsync(Pessoa person)
        {
            await db.Pessoas.AddAsync(person);
            await db.SaveChangesAsync();

            return person;
        }

        public async Task<bool> DeleteByIdAsync(Guid personId)
        {
            int rowsAffected = await db.Pessoas
                .Where(x => x.Id == personId)
                .ExecuteDeleteAsync();

            return rowsAffected > 0;
        }

        public async Task<IEnumerable<Pessoa>> GetAllAsync()
        {
            return await db.Pessoas.ToListAsync();
        }

        public async Task<Pessoa?> GetByIdAsync(Guid personId)
        {
            var person = await db.Pessoas.FindAsync(personId);
            return person;
        }
    }
}
