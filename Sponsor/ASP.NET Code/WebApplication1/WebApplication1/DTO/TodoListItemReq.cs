using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace To_Do_Widget.DTO
{
    public class TodoListItemRequest
    {
        //public long Id { get; set; }
        //public string Name { get; set; }


        public string title { get; set; }
        public List<child> childrens { get; set; }
        public bool IsComplete { get; set; }
    }

    public class child
    {
        public string title { get; set; }
        public string path { get; set; }
    }
}
