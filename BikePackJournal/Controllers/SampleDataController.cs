using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BikePackJournal.Models;
using Microsoft.AspNetCore.Mvc;

namespace BikePackJournal.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        [HttpGet("[action]")]
        public IList<Bicycle> GetBicycle()
        {
            var bicycle = new Bicycle() { Brand = "Salsa", BikeModel = "Cutthroat", IsActive = true };
            var bicycles = new List<Bicycle>();
            bicycles.Add(bicycle);

            return bicycles;
        }

        [HttpPost]
        public Bicycle PostBicycle([FromBody] Bicycle bicycle)
        {
            var item = new Bicycle() { id = 1, Brand = bicycle.Brand, ActivityLevel = bicycle.ActivityLevel };

            return item;
        }

        [HttpGet("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        


        public class WeatherForecast
        {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF
            {
                get
                {
                    return 32 + (int)(TemperatureC / 0.5556);
                }
            }
        }
    }
}
