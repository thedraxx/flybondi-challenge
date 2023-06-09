import { FlyBondyTravels } from '@/components/interface'
import React from 'react'
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';


interface CardFliesProps {
    fly: FlyBondyTravels
}

export const CardFlies = ({ fly }: CardFliesProps) => {


    const router = useRouter()

    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Button
                onClick={() => { router.push(`/fly/${fly._id}`) }}
                className='color-primary card'

            >

                <div className='card__content'>
                    <div className='card__content__data'>
                        <p>{fly.data}</p>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'row'
                            }}
                        >
                            <Typography variant="h6" component="div" gutterBottom>
                                {`${fly.origin} - ${fly.destination}`}
                            </Typography>
                        </Box>

                        <Typography variant="h6" component="div" gutterBottom>
                            Price: {fly.price} USD
                        </Typography>

                        <Typography variant="h6" component="div" gutterBottom>
                            Availability: {fly.availability}
                        </Typography>
                    </div>
                </div>

            </Button>

        </Box >
    )
}
