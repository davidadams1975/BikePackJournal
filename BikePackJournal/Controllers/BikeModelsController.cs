using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BikePackJournal.Models;
using BikePackJournal.Persistence;

namespace BikePackJournal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BikeModelsController : ControllerBase
    {
        private readonly BikePackDBContext _context;

        public BikeModelsController(BikePackDBContext context)
        {
            _context = context;
        }

        // GET: api/BikeModels
        [HttpGet("[action]")]
        public IEnumerable<BikeModel> GetBikeModels()
        {
            return _context.BikeModels;
        }

        // GET: api/BikeModels/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBikeModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bikeModel = await _context.BikeModels.FindAsync(id);

            if (bikeModel == null)
            {
                return NotFound();
            }

            return Ok(bikeModel);
        }

        // PUT: api/BikeModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBikeModel([FromRoute] int id, [FromBody] BikeModel bikeModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bikeModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(bikeModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BikeModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BikeModels
        [HttpPost]
        public async Task<IActionResult> PostBikeModel([FromBody] BikeModel bikeModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.BikeModels.Add(bikeModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBikeModel", new { id = bikeModel.Id }, bikeModel);
        }

        // DELETE: api/BikeModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBikeModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var bikeModel = await _context.BikeModels.FindAsync(id);
            if (bikeModel == null)
            {
                return NotFound();
            }

            _context.BikeModels.Remove(bikeModel);
            await _context.SaveChangesAsync();

            return Ok(bikeModel);
        }

        private bool BikeModelExists(int id)
        {
            return _context.BikeModels.Any(e => e.Id == id);
        }
    }
}