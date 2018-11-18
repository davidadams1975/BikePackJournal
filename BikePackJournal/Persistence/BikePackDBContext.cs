using BikePackJournal.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BikePackJournal.Persistence
{
    public class BikePackDBContext : DbContext
    {
        

        public BikePackDBContext(DbContextOptions<BikePackDBContext> options) : base(options)
        {
        }

        public DbSet<BikeMake> BikeMakes { get; set; }
        public DbSet<BikeModel> BikeModels { get; set; }
    }
}
