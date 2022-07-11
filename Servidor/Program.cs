using Servidor.Controllers;
using Servidor.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options => options.AddPolicy("MyPolicy", builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        }));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("MyPolicy");
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


EventosController ec = new EventosController();
app.MapGet("/api/Eventos", () =>
{
    return Results.Ok(ec.getAll());

});

app.MapGet("/api/Eventos/Buscar/{id}", (int id) =>
{
    return Results.Ok(ec.Filtrar(id));
});
app.Run();
