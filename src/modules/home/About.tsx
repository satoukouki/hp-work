import { Box, SxProps, Theme } from "@mui/material";
import Aboutimg from "../../resources/work1/home/about_illustration.png";
export const About = () => {
  return (
    <Box className="About" sx={sx}>
    
      <Box className="About-Title"><span className="Title-hed">A</span>bout</Box>
      <Box className="About-underTitle">私たちについて</Box>
<img className="Aboutimg" src={Aboutimg} alt="" />
<Box className="About-content">
      副業人材を主体とした「業務委託サービス」です。 <br/>
  通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う  <br/>
  フリーランスエンジニアが現在約100名ほど所属しています。 <br/>

  副業を主体としているため長時間の拘束稼働はできませんが、 <br/>
  トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。 <br/>
  クライアント側のチームメンバーと共同して開発を行うこともできるため、 <br/>
  クライアント所属のエンジニアのスキルアップを行うことも可能です。 <br/>
</Box>


    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    padding:"0",
    display: "inline-block",
    backgroundColor:"rgba(34, 161, 185, 0.1)",
  },
  ".About-Title":{
    fontSize:"36px",
    fontWeight:700,
    textAlign:"center"
  },
  ".About-content":{
    textAlign:"center",
    fontSize:"18px",
    Weight:"400"
  },
  ".Title-hed":{
    color:"#22A1B9",
    fontSize:"36px",
  },
  ".About-underTitle":{
    textAlign:"center",
    fontSize:"16px",
    Weight:700,
  },
".Aboutimg":{
width:"100%"
}
};
