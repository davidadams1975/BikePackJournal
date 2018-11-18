using BikePackJournal.Models;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BikePackJournal.Controllers.Resources
{
    public class BikeMakeResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<BikeModelResource> BikeModels { get; set; }

        public BikeMakeResource()
        {
            BikeModels = new Collection<BikeModelResource>();
        }
    }
}
