import React from 'react'
import { Modal, Box, Typography, Button } from "@mui/material";
import { GoAlertFill } from "react-icons/go";
import { ClipLoader } from 'react-spinners';
export default function AlertModal({ open, handleClose,title,fun,buttonLoader }) {
  return (
    <Modal open={open}     onClose={() => {
        if (!buttonLoader) {
          handleClose();
        }
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
         border:'none',
         outline:'none',
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Box sx={{ backgroundColor: "#3b82f6", borderTopLeftRadius:5, borderTopRightRadius:5 }}>
<div className='flex self-center text-white items-center justify-center p-2'>
<GoAlertFill className="text-white mr-2" />
Alert
</div>
        </Box>
        <Typography sx={{ mt: 2,p:1 }}>{title}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2,alignItems:'center',mb:2 }}>
        <button disabled={buttonLoader} onClick={handleClose} className='w-[140px]  h-[40px]  hover:bg-blue-50 text-[14px] text-customBlue border border-customBlue rounded-md'>
        Cancel
      </button>
          <button disabled={buttonLoader} onClick={()=> fun()} className='w-[140px] hover:bg-blue-700 h-[40px] ml-5 text-[14px] bg-customBlue text-white rounded-md'>
          {buttonLoader ?  <ClipLoader size={24} className='mt-2' color='white' /> :"Sure"}
        </button>
        </Box>
      </Box>
    </Modal>
  )
}
