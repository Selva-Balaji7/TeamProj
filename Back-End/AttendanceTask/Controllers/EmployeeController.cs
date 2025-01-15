using AttendanceTask.Models;
using Microsoft.AspNetCore.Mvc;

namespace AttendanceTask.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        private static readonly List<Employee> Employee = new List<Employee>
        {
            new Employee { EmpId = 1 , EmpName = "" },
            new Employee { EmpId = 2 , EmpName = "" },
            new Employee { EmpId = 3 , EmpName = "" }
        };

        [HttpGet]
        public IEnumerable<Employee> GetEmployees()
        {
            return Ok(Employee);
        }

        [HttpPost]
        public ActionResult 
            Post([FromBody] Reservation res) =>
           repository.AddReservation(new Reservation
           {
               Id = res.Id,
               Name = res.Name,
               StartLocation = res.StartLocation,
               EndLocation = res.EndLocation
           });
    }
}
