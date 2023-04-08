import Cards from '../components/Cards'
import SummarizeIcon from '@mui/icons-material/Summarize';
import  {Button, Card, Container, styled }  from '@mui/material'
import BarChar from './Charts';
import LineChart from './LineChart';


export const Dashboard = () => {
    const BtnReport = styled(Button)``
   
  return (
   
        <Container sx={{backgroundColor:'lightgray' ,marginTop:"100px", marginLeft:'300px' , padding:1}} >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'  , flexGrow:1, p:3}} >
          <h1 style={{ marginBottom: '30px', marginTop: '30px', fontSize: '14px' }} >RoyalUI Dashboard</h1>

          <BtnReport
            sx={{
              backgroundColor: '#24a0ed ', color: 'white', padding: "9px 12px", borderRadius: '40px', fontSize: '8px',
              ":hover": {
                bgcolor: "darkblue",
                color: "white"
              }
            }} >
            <SummarizeIcon sx={{ width: '15px', height: '15px' }} /> Report
          </BtnReport>
        </div>
        <Cards />
        
        <div className="charts" style={{display:'flex', gap:'2rem' ,marginTop:'2rem'}} >
          <Card className="chart" style={{ display:'flex',gap:'10px',flexDirection:'column', padding:'20px', width:'50vw', height:'50vh'}} >
            <span style={{color:'gray', fontSize:'15px' }} >Sales Details</span>
            <p  style={{color:'gray', fontSize:'12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem atque commodi delectus totam quod.</p>
           <BarChar />
          </Card>
          <Card className="chart"style={{ display:'flex',gap:'10px',flexDirection:'column', padding:'20px', width:'50vw', height:'50vh'}}>
          <span style={{color:'gray', fontSize:'15px' }} >PURCHESES</span>
            <p  style={{color:'gray', fontSize:'12px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem atque commodi delectus totam quod.</p>

            <div className="div" style={{display:'flex' ,  gap:'4rem',alignItems:'center'}}>
              <div className="div1" style={{display:'flex',alignItems:'center',flexDirection:'column' }} >
                <span style={{color:'gray'}} >Status</span>
                <h2>364</h2>
              </div>
              <div className="div1" style={{display:'flex',alignItems:'center',flexDirection:'column' }} >
                <span style={{color:'gray'}} >New User</span>
                <h2>664</h2>
              </div>
              <div className="div1">
                <span style={{color:'gray'}} >Chat</span>
                <h2>464</h2>
              </div>
              <div className="div1" style={{display:'flex',alignItems:'center',flexDirection:'column' }} >
                <span style={{color:'gray'}} >FeedBack</span>
                <h2>363</h2>
              </div>
            </div>
        <LineChart/>
        
          </Card>
        </div>

      </Container>
  
  )
}

export default Dashboard ;
