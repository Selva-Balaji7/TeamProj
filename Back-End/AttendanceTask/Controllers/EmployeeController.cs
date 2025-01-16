using AttendanceTask.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AttendanceTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        private readonly AttendanceDbContext _context;


        public EmployeeController(AttendanceDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployee()
        {
            return await _context.Employees.ToListAsync();
        }

        [HttpGet("{EmpId}")]
        public async Task<ActionResult<Employee>> GetEmployee(int EmpId)
        {
            var employee = await _context.Employees.FindAsync(EmpId);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }



        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employees.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { EmpId = employee.EmpId }, employee);

        }


        [HttpDelete("{EmpId}")]
        public async Task<IActionResult> DeleteEmployee(int EmpId)
        {
            var employee = await _context.Employees.FindAsync(EmpId);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employees.Remove(employee);
            await _context.SaveChangesAsync();

            return NoContent();
        }




    }
}
