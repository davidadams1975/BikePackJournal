using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BikePackJournal.Models
{
    public class Bicycle
    {
        public int id { get; set; }
        public string Brand { get; set; }
        public string BikeModel { get; set; }
        public bool IsActive { get; set; }
        public string BicycleType { get; set; }
        public string ActivityLevel { get; set; }
    }
}
