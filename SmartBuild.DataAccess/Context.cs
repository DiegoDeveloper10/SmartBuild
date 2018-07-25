using Microsoft.EntityFrameworkCore;

namespace SmartBuild.DataAccess
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options)
        {

        }

        public DbSet<Model.Usuario> Usuarios { get; set; }        
    }
}
