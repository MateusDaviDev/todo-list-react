import styled from "styled-components";

type ContainerProps ={
  done:boolean;
}
export const Container = styled.div(({done}:ContainerProps)=>(
  `
  display: flex;
  background-color: #20212c;
  padding: 10px;

  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;

  input{
    width: 20px;
    height: 20px;
    margin-right: 20px;
  }
  label{
    color: #ccc;
    text-decoration: ${done? 'line-through':'initial'}
  }

    .space-icons{
      display: flex;
      justify-content:space-between;
      width:100vw;
      flex: 1;

    }
  .button-remove{
    cursor:pointer;
    
  }
  .button-remove:hover{
   
    color:#ff4040;
  }
`
));



  
