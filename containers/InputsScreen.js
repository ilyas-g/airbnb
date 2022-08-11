import { ScrollView, TextInput, Text } from "react-native";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const InputScreen = () => {
  const [input, setInput] = useState("");

  return (
    // keyboardAwareScrollView permet de faire en sorte que le clavier de mon téléphonne ne recouvre pas ma page
    <KeyboardAwareScrollView>
      <Text>{input}</Text>
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
      <TextInput
        placeholder="name"
        value={input}
        // onChange={(event) => {
        //   setInput(event.target.value);
        // }}
        onChangeText={(text) => {
          console.log(text);
          setInput(text);
        }}
        style={{
          height: 40,
          borderColor: "red",
          borderWidth: 2,
          marginBottom: 50,
        }}
      />
    </KeyboardAwareScrollView>
  );
};

export default InputScreen;
