using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace To_Do_Widget.DTO
{
    public class FakeData
    {
               private static List<TodoListItemRequest> _requests { get; set; }



       public static int _nextRequestId = 0;



       public static List<TodoListItemRequest> GetTodoListItems()
        {
            if (_requests == null)
            {
                _requests = new List<TodoListItemRequest>();



               _requests.Add(new TodoListItemRequest()
                {
                    Id = GetNextId(),
                    IsComplete = false,
                    Name = "Do Demo of c# Web API"
                });



           }



           return _requests;
        }



       public static TodoListItemRequest CreateTodoListItemRequest(string name, bool isComplete)
        {
            var request = new TodoListItemRequest()
            {
                Id = GetNextId(),
                IsComplete = isComplete,
                Name = name
            };



           _requests.Add(request);



           return request;
        }



       private static long GetNextId()
        {
            _nextRequestId = _nextRequestId + 1;



           return _nextRequestId;
        }
    }
}