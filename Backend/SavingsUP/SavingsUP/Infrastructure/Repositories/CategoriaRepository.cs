using Microsoft.EntityFrameworkCore;
using SavingsUP.Domain.Entities;
using SavingsUP.Domain.Interfaces;
using SavingsUP.Infrastructure.Contexts;

namespace SavingsUP.Infrastructure.Repositories
{
    public class CategoriaRepository(ApplicationDbContext db) : ICategoriaRepository
    {
        public async Task<Categoria> AddAsync(Categoria category)
        {
            await db.Categorias.AddAsync(category);
            await db.SaveChangesAsync();

            return category;
        }

        public async Task<IEnumerable<Categoria>> GetAllAsync()
        {
            return await db.Categorias.ToListAsync();
        }
    }
}