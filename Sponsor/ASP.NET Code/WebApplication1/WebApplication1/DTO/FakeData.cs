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
                    //Id = GetNextId(),
                    title = "word",
                    childrens = GetChildren(),
                    IsComplete = false,
                    //Name = "Do Demo of c# Web API"
                });



           }



           return _requests;
        }



       public static TodoListItemRequest CreateTodoListItemRequest(string title, List<child> childrens, bool isComplete)
        {
            var request = new TodoListItemRequest()
            {
                //Id = GetNextId(),
                title = title,
                childrens = childrens,
                IsComplete = isComplete,
                //Name = "Do Demo of c# Web API"
            };



           _requests.Add(request);



           return request;
        }



       private static long GetNextId()
        {
            _nextRequestId = _nextRequestId + 1;



           return _nextRequestId;
        }

        private static List<child> GetChildren()
        {
            List<child> children = new List<child>();
            children.Add(new child { title = "first_title", path = "/path" });

            return children;
        }
    }
}