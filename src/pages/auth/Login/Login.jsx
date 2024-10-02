import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Center,
  Alert,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { login } from "../../../store/storeLogin";
import { useDispatch } from "react-redux";

function LoginForm() {
  const [azienda, setAzienda] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Login call
   * @param event
   * @returns {Promise<Response>}
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start Loading

    // Compile options
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        azienda,
        user,
        password,
      }),
    };

    // Call
    try {
      const response = await fetch(
        "https://apis.axonasrl.com/api/axo_login",
        options
      );
      const data = await response.json();

      console.log(response);

      if (response.ok) {
        if (data.Errore) {
          setError(data?.Errore || "Login failed");
          setLoading(false); // Stop Loading
        } else {
          console.log("Login successful:", data);
          dispatch(login(data)); // Invia i dati utente allo store
          navigate("/dashboard"); // Redirect alla dashboard
        }
      } else {
        setError(data?.Errore || "Login failed");
        setLoading(false); // Stop Loading
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setLoading(false); // Stop Loading
    }
  };

  return (
    <Center style={{ minHeight: "100vh" }}>
      <Container size={420}>
        <Title align="center">Accedi</Title>
        <Paper p={30} mt={5} radius="md" style={{ width: 400, maxWidth: 400 }}>
          {error && (
            <Alert title="Error" color="red" mb={10}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextInput
              label="Azienda"
              placeholder="12345678912"
              required
              value={azienda}
              onChange={(e) => setAzienda(e.currentTarget.value)}
            />
            <TextInput
              label="User"
              placeholder="test@mail.com"
              required
              mt="md"
              value={user}
              onChange={(e) => setUser(e.currentTarget.value)}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Button type="submit" fullWidth mt="xl" loading={loading}>
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </Center>
  );
}
export default LoginForm;
