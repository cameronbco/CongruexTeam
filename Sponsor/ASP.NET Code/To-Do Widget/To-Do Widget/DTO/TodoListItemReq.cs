using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace To_Do_Widget.DTO
{
    public class TodoListItemRequest{
        public long Id { get; set; }
        public string Name { get; set; }

        public bool IsCompleted { get; set; }
    }
}
