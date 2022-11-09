using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using To_Do_Widget.DTO;

namespace To_Do_Widget.Controllers
{
    [ApiController]
    [Route("/api/v1/[controller]")]
    public class TodoListItemController : ControllerBase
    {
        public TodoListItemController()
        {

        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoListItemRequest>>> Get()
        {
            // Return NotFound() == 404
            // Return NoContent() and so on.
            return FakeData.GetTodoListItems();
        }
        [HttpPost]
        public async Task<ActionResult<TodoListItemRequest>> PostTodoListItem(TodoListItemRequest request)
        {
            TodoListItemRequest item = FakeData.CreateTodoListItemRequest(request.Name, request.IsComplete);
            return item;
        }
    }
}
