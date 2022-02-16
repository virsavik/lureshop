import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = values => alert(JSON.stringify(values, null, 2));

  return (
    <Box
      sx={{
        top: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}
    >
      <Grid container>
        <Grid item xs>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="outlined">Register</Button>
        </Grid>
      </Grid>

      {/* {loginError && (
        <Alert color="error">
          <AlertTitle>Error</AlertTitle>
          <p>Invalid email or password</p>
        </Alert>
      )} */}
      <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
        <FontAwesomeIcon icon={['fab', 'google']} />
        &nbsp; Sign In with Google
      </Button>
      <Divider style={{ width: '100%' }} />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
        <Controller
          control={control}
          name="email"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              autoComplete="username"
              error={!!errors.email}
              helperText={errors.email && 'Please enter a Email'}
              autoFocus
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              margin="normal"
              type="password"
              required
              fullWidth
              label="Password"
              error={!!errors.password}
              helperText={errors.password && 'Please enter a password'}
              autoComplete="current-password"
              {...field}
            />
          )}
        />
        <Grid container spacing={3}>
          <Grid item xs>
            <Button type="submit" fullWidth variant="contained">
              login
            </Button>
          </Grid>
          <Grid item xs>
            <Link href="/forgot-password" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default LoginPage;
