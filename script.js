class Student
{

    constructor(mypaper1,mypaper2,mypaper3,mypaper4,mypaper5,mypaper6,creditofpaper1_3 ,creditofpaper4_6)
    {
        this.paper1 = mypaper1;
        this.paper2 = mypaper2;
        this.paper3 = mypaper3;
        this.paper4 = mypaper4;
        this.paper5 = mypaper5;
        this.paper6 = mypaper6;
        this.credit_for_1_to_3 = creditofpaper1_3;
        this.credit_for_4_to_6 = creditofpaper4_6;
    }
    cgpa(){
        var p1 = this.paper1*this.credit_for_1_to_3;
        var p2 = this.paper2*this.credit_for_1_to_3;
        var p3 = this.paper3*this.credit_for_1_to_3;
        var p4 = this.paper4*this.credit_for_4_to_6;
        var p5 = this.paper5*this.credit_for_4_to_6;
        var p6 = this.paper6*this.credit_for_4_to_6;
        var cgpa = ((p1+p2+p3+p4+p5+p6)/ (3*this.credit_for_1_to_3 + 3*this.credit_for_4_to_6));
        return cgpa;
        
    }
}

function s1(){
    var paper1=document.getElementById("paper1").value;
    var paper2=document.getElementById("paper2").value;
    var paper3=document.getElementById("paper3").value;
    var paper4=document.getElementById("paper4").value;
    var paper5=document.getElementById("paper5").value;
    var paper6=document.getElementById("paper6").value;
    student1 = new Student(paper1,paper2,paper3,paper4,paper5,paper6,4,5);
    document.getElementById("result").innerHTML = student1.cgpa();
}
class Patient
{
    constructor(patientname,patientage,patientgender)
    {
        this.name =patientname;
        this.age = patientage;
        this.gender = patientgender;
    }
}
class in_Patient extends Patient
{
    constructor(ip,nod,patientname,patientage,patientgender)
    {
        super(patientname,patientage,patientgender);
        this.ip_number = ip;
        this.Num_Of_Days = nod;
    }
}
class General_ward extends in_Patient
{
    constructor(rpd,fee,ip,nod,patientname,patientage,patientgender)
    {
        super(ip,nod,patientname,patientage,patientgender);
        this.rentperDay = rpd;
        this.fees = fee;
    }
}
class Special_ward extends in_Patient
{
    constructor(rpd,roomnumber,bill,fee,ip,nod,patientname,patientage,patientgender)
    {
        super(ip,nod,patientname,patientage,patientgender);
        this.rentperDay = rpd;
        this.roomnum = roomnumber;
        this.ebbill = bill;
        this.fees = fee;
    }
}
function in_pat ()
{ 
    var patientname =document.getElementById("name1").value;
    var patientage = document.getElementById("age1").value; 
    var patientgender = document.getElementById("gender1").value;
    var ward =  document.getElementById("ward").value;
    var ipnum =  document.getElementById("ipnum").value;
    var NumOfDays =  document.getElementById("NumOfDays").value;
    var RentPerDay =  document.getElementById("rpd").value;
    var Fee =  document.getElementById("fee").value;
    var eBill =  document.getElementById("ebill").value;
    var RoomNum =  document.getElementById("RoNum").value;
    var genepatient = new General_ward(RentPerDay,Fee,ipnum,NumOfDays,patientname,patientage,patientgender);
    var splpatient = new Special_ward(RentPerDay,RoomNum,eBill,Fee,ipnum,NumOfDays,patientname,patientage,patientgender);
    if (ward == "General Ward")
    {
        
        function printObject(o) 
            {
                var out = '';
                for (var p in o) {
                out += p + ': ' + o[p] + "<br>";
                }
                document.getElementById("inpat").innerHTML = out;
            }
        printObject(genepatient);
    }
    else
    {
        
        function printObject(o) 
            {
                var out = '';
                for (var p in o) {
                out += p + ': ' + o[p] + "<br>";
                }
                document.getElementById("inpat").innerHTML = out;
            }
        printObject(splpatient);


    }
}
class Out_Patient extends Patient
{
    constructor(opnum,id,fee,patientname,patientage,patientgender)
    {
        super(patientname,patientage,patientgender);
        this.op_number = opnum;
        this.doc_id = id;
        this.fees = fee;
    }
}
function out_pat()
{
    var patientname =document.getElementById("name").value;
    var patientage = document.getElementById("age").value; 
    var patientgender = document.getElementById("gender").value;
    var id = document.getElementById("docid").value;
    var fees = document.getElementById("opfee").value;
    var Op_num = document.getElementById("op").value;
    var patient = new Out_Patient(id,fees,Op_num,patientname,patientage,patientgender);
    function printObject(o) 
    {
        
        var out = '';
        for (var p in o) {
          out += p + ': ' + o[p] + "<br>";
        }
        document.getElementById("outpat").innerHTML = out;
    }
    printObject(patient);
}

