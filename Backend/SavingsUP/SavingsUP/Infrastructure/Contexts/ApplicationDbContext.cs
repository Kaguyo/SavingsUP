using Microsoft.EntityFrameworkCore;
using SavingsUP.Domain.Entities;

namespace SavingsUP.Infrastructure.Contexts
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options){}

        public DbSet<Pessoa> Pessoas { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Transacao> Transacoes { get; set; }
    }
}
