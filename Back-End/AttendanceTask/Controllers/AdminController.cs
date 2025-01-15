using Microsoft.AspNetCore.Mvc;

namespace AttendanceTask.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
