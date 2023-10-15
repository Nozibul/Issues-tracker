import { Badge } from "@radix-ui/themes";


// 
const statusMap ={
    OPEN:{ label: "Open", color:"red" },
    IN_PROGRESS:{ label: "In progress", color:"violet" },
    CLOSED:{ label: "Closed", color:"green"}
};

const IssueStatus = ({status}) => {
  return (
    <div>
        <Badge color={statusMap[status].color}>
            {statusMap[status].label}
        </Badge>
    </div>
  )
}

export default IssueStatus