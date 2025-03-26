import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { CheckCircle, AccountCircle, Payment } from '@mui/icons-material';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CheckCircle fontSize="large" className="text-green-500" />,
      title: 'Sign Up & Create Profile',
      description: 'Create a free account and set up your freelancer profile to showcase your skills and experience.',
    },
    {
      icon: <AccountCircle fontSize="large" className="text-yellow-500" />,
      title: 'Browse Opportunities',
      description: 'Explore various freelance projects, connect with clients, and find the perfect job match for you.',
    },
    {
      icon: <Payment fontSize="large" className="text-red-500" />,
      title: 'Get Paid Securely',
      description: 'Once the job is complete, securely receive your payment through our platform, ensuring both parties are protected.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 max-w-[80%] mx-auto">
      <div className="text-center mb-12">
        <Typography variant="h3" className="text-3xl md:text-4xl font-bold text-primary">
          How It Works
        </Typography>
        <Typography variant="body1" className="mt-4 text-lg text-gray-700">
          A simple 3-step process to get started with freelance work in Cameroon.
        </Typography>
      </div>

      <Grid container spacing={6} sx={{px:3}} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className="shadow-lg rounded-lg">
              <CardContent className="flex flex-col items-center p-8">
                <div className="mb-6">{step.icon}</div>
                <Typography variant="h6" className="font-semibold text-xl mb-4 text-primary">
                  {step.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 text-center">
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default HowItWorksSection;
