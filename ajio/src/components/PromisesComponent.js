import React from 'react';
import Controls from '../commons/Controls';
import { Icon } from '@iconify/react';
import theme from '../utilities/theme';

const PromisesComponent = ({value1,value2 ,value3,value4,value5,value6,value7,value9,value11}) => {
    const content = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M22 3.94L12 .44L2 3.94V12c0 4.127 2.534 7.012 4.896 8.803a19.8 19.8 0 0 0 4.65 2.595q.17.064.342.122l.112.04l.114-.04a14 14 0 0 0 .65-.244a19.7 19.7 0 0 0 4.34-2.473C19.467 19.012 22 16.127 22 12zM11.001 15.415L6.76 11.172l1.414-1.415l2.828 2.829l5.657-5.657l1.415 1.414z"
                    />
                </svg>
            ),
            name: 'SECURE PAYMENTS',
        },
        { icon: <Controls.CurrencyRupeeIcon sx={{width:"20px",height:"20px",border:`1px solid ${theme.palette.one.text2}`,borderRadius:"50%",padding:0.3}}/>, name: 'CASH ON DELIVERY' },
        { icon: <Controls.VerifiedTwoToneIcon sx={{width:"22px",height:"22px"}}/>, name: 'ASSURED QUALITY' },
        {
            icon: <Icon icon="hugeicons:exchange-01" width="20px" height="20px" />,
            name: 'EASY RETURNS',
        },
    ];

    return (
        <Controls.Grid container justifyContent="center" >
            <Controls.Grid xs={12} sx={{borderTop:value1,borderBottom:value2,justifyContent:value5,textAlign:value6,alignItems:"center",display:"flex"}}p={value3} my={value4}>
            <Controls.Grid item xs={12} sm={value9} lg={9.5} xl={12}sx={{margin:"auto",alignItems:"center",display:"flex",flexDirection:{xs:"row",sm:"row"},}} ml={value11}>
            {content.map((item, index) => (
                <Controls.Grid item xs={3} sm={6} md={3} key={index} mb={2} gap={1}>
                    <Controls.Box sx={{ display: {xs:"flex",sm:'flex'}, flexDirection: {xs:"row",sm:'row'}, alignItems: 'center', textAlign: 'center',justifyContent:value7, }} gap={0.5}>
                        <Controls.Grid item mt={.5}>
                        <Controls.Box sx={{ color:theme.palette.one.text2,}}>{item.icon}</Controls.Box>
                        </Controls.Grid>
                        <Controls.Typography variant="caption" sx={{ fontSize:{xs:"8px",sm:"12px",md:"14px"},fontWeight: 'medium',color:theme.palette.one.text2 }}>
                            {item.name}
                        </Controls.Typography>
                    </Controls.Box>
                </Controls.Grid>
            ))}
            </Controls.Grid>
            </Controls.Grid>
        </Controls.Grid>
    );
};

export default PromisesComponent;
