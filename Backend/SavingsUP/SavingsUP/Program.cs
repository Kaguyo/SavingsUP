using Microsoft.EntityFrameworkCore;
using SavingsUP.API.Endpoints;
using SavingsUP.Application.Interfaces;
using SavingsUP.Application.Services;
using SavingsUP.Domain.Interfaces;
using SavingsUP.Infrastructure.Contexts;
using SavingsUP.Infrastructure.Repositories;

var builder = WebApplication.CreateBuilder(args);

// 1. Injeção do DbContext
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer("name=defaultConnection"));

// 2. Swagger/OpenAPI (Recursos mínimos de interface para teste)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// 3. Registro dos Repositories
builder.Services.AddScoped<IPessoaRepository, PessoaRepository>();
builder.Services.AddScoped<ICategoriaRepository, CategoriaRepository>();
builder.Services.AddScoped<ITransacaoRepository, TransacaoRepository>();

// 4. Registro das Services
builder.Services.AddScoped<IPessoaService, PessoaService>();
builder.Services.AddScoped<ICategoriaService, CategoriaService>();
builder.Services.AddScoped<ITransacaoService, TransacaoService>();

var app = builder.Build();

// --- PIPELINE DE EXECUÇÃO (Middleware) ---

// Ativa o Swagger apenas em Desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/", () => Results.Redirect("/swagger"));

// 5. Mapeamento dos Endpoints (Minimal APIs)
app.MapPessoasEndpoints();
app.MapCategoriasEndpoints();
app.MapTransacoesEndpoints();

app.Run();