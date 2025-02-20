/* eslint-disable react/jsx-props-no-spreading, react/destructuring-assignment */
import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme-original/CodeBlock";

/**
 * @typedef {Object} ChatModelTabsProps - Component props.
 * @property {string} [openaiParams] - Parameters for OpenAI chat model. Defaults to `model="gpt-3.5-turbo-0125"`
 * @property {string} [anthropicParams] - Parameters for Anthropic chat model. Defaults to `model="claude-3-sonnet-20240229"`
 * @property {string} [cohereParams] - Parameters for Cohere chat model. Defaults to `model="command-r"`
 * @property {string} [fireworksParams] - Parameters for Fireworks chat model. Defaults to `model="accounts/fireworks/models/mixtral-8x7b-instruct"`
 * @property {string} [groqParams] - Parameters for Groq chat model. Defaults to `model="llama3-8b-8192"`
 * @property {string} [mistralParams] - Parameters for Mistral chat model. Defaults to `model="mistral-large-latest"`
 * @property {string} [googleParams] - Parameters for Google chat model. Defaults to `model="gemini-pro"`
 * @property {string} [togetherParams] - Parameters for Together chat model. Defaults to `model="mistralai/Mixtral-8x7B-Instruct-v0.1"`
 * @property {boolean} [hideOpenai] - Whether or not to hide OpenAI chat model.
 * @property {boolean} [hideAnthropic] - Whether or not to hide Anthropic chat model.
 * @property {boolean} [hideCohere] - Whether or not to hide Cohere chat model.
 * @property {boolean} [hideFireworks] - Whether or not to hide Fireworks chat model.
 * @property {boolean} [hideGroq] - Whether or not to hide Groq chat model.
 * @property {boolean} [hideMistral] - Whether or not to hide Mistral chat model.
 * @property {boolean} [hideGoogle] - Whether or not to hide Google VertexAI chat model.
 * @property {boolean} [hideTogether] - Whether or not to hide Together chat model.
 * @property {boolean} [hideAzure] - Whether or not to hide Microsoft Azure OpenAI chat model.
 * @property {string} [customVarName] - Custom variable name for the model. Defaults to `model`.
 */

/**
 * @param {ChatModelTabsProps} props - Component props.
 */
export default function ChatModelTabs(props) {
  const {
    openaiParams,
    anthropicParams,
    cohereParams,
    fireworksParams,
    groqParams,
    mistralParams,
    googleParams,
    togetherParams,
    azureParams,
    hideOpenai,
    hideAnthropic,
    hideCohere,
    hideFireworks,
    hideGroq,
    hideMistral,
    hideGoogle,
    hideTogether,
    hideAzure,
    customVarName,
  } = props;

  const openAIParamsOrDefault = openaiParams ?? `model="gpt-4o-mini"`;
  const anthropicParamsOrDefault =
    anthropicParams ?? `model="claude-3-5-sonnet-20240620"`;
  const cohereParamsOrDefault = cohereParams ?? `model="command-r-plus"`;
  const fireworksParamsOrDefault =
    fireworksParams ??
    `model="accounts/fireworks/models/llama-v3p1-70b-instruct"`;
  const groqParamsOrDefault = groqParams ?? `model="llama3-8b-8192"`;
  const mistralParamsOrDefault =
    mistralParams ?? `model="mistral-large-latest"`;
  const googleParamsOrDefault = googleParams ?? `model="gemini-1.5-flash"`;
  const togetherParamsOrDefault =
    togetherParams ??
    `\n    base_url="https://api.together.xyz/v1",\n    api_key=os.environ["TOGETHER_API_KEY"],\n    model="mistralai/Mixtral-8x7B-Instruct-v0.1",\n`;
  const azureParamsOrDefault =
    azureParams ??
    `\n    azure_endpoint=os.environ["AZURE_OPENAI_ENDPOINT"],\n    azure_deployment=os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],\n    openai_api_version=os.environ["AZURE_OPENAI_API_VERSION"],\n`;

  const llmVarName = customVarName ?? "model";

  const tabItems = [
    {
      value: "OpenAI",
      label: "OpenAI",
      text: `from langchain_openai import ChatOpenAI\n\n${llmVarName} = ChatOpenAI(${openAIParamsOrDefault})`,
      apiKeyName: "OPENAI_API_KEY",
      packageName: "langchain-openai",
      default: true,
      shouldHide: hideOpenai,
    },
    {
      value: "Anthropic",
      label: "Anthropic",
      text: `from langchain_anthropic import ChatAnthropic\n\n${llmVarName} = ChatAnthropic(${anthropicParamsOrDefault})`,
      apiKeyName: "ANTHROPIC_API_KEY",
      packageName: "langchain-anthropic",
      default: false,
      shouldHide: hideAnthropic,
    },
    {
      value: "Azure",
      label: "Azure",
      text: `from langchain_openai import AzureChatOpenAI\n\n${llmVarName} = AzureChatOpenAI(${azureParamsOrDefault})`,
      apiKeyName: "AZURE_OPENAI_API_KEY",
      packageName: "langchain-openai",
      default: false,
      shouldHide: hideAzure,
    },
    {
      value: "Google",
      label: "Google",
      text: `from langchain_google_vertexai import ChatVertexAI\n\n${llmVarName} = ChatVertexAI(${googleParamsOrDefault})`,
      apiKeyName: "GOOGLE_API_KEY",
      packageName: "langchain-google-vertexai",
      default: false,
      shouldHide: hideGoogle,
    },
    {
      value: "Cohere",
      label: "Cohere",
      text: `from langchain_cohere import ChatCohere\n\n${llmVarName} = ChatCohere(${cohereParamsOrDefault})`,
      apiKeyName: "COHERE_API_KEY",
      packageName: "langchain-cohere",
      default: false,
      shouldHide: hideCohere,
    },
    {
      value: "FireworksAI",
      label: "FireworksAI",
      text: `from langchain_fireworks import ChatFireworks\n\n${llmVarName} = ChatFireworks(${fireworksParamsOrDefault})`,
      apiKeyName: "FIREWORKS_API_KEY",
      packageName: "langchain-fireworks",
      default: false,
      shouldHide: hideFireworks,
    },
    {
      value: "Groq",
      label: "Groq",
      text: `from langchain_groq import ChatGroq\n\n${llmVarName} = ChatGroq(${groqParamsOrDefault})`,
      apiKeyName: "GROQ_API_KEY",
      packageName: "langchain-groq",
      default: false,
      shouldHide: hideGroq,
    },
    {
      value: "MistralAI",
      label: "MistralAI",
      text: `from langchain_mistralai import ChatMistralAI\n\n${llmVarName} = ChatMistralAI(${mistralParamsOrDefault})`,
      apiKeyName: "MISTRAL_API_KEY",
      packageName: "langchain-mistralai",
      default: false,
      shouldHide: hideMistral,
    },
    {
      value: "TogetherAI",
      label: "TogetherAI",
      text: `from langchain_openai import ChatOpenAI\n\n${llmVarName} = ChatOpenAI(${togetherParamsOrDefault})`,
      apiKeyName: "TOGETHER_API_KEY",
      packageName: "langchain-openai",
      default: false,
      shouldHide: hideTogether,
    },
  ];

  return (
    <Tabs groupId="modelTabs">
      {tabItems
        .filter((tabItem) => !tabItem.shouldHide)
        .map((tabItem) => {
          const apiKeyText = `import getpass
import os

os.environ["${tabItem.apiKeyName}"] = getpass.getpass()`;
          return (
            <TabItem
              value={tabItem.value}
              label={tabItem.label}
              default={tabItem.default}
            >
              <CodeBlock language="bash">{`pip install -qU ${tabItem.packageName}`}</CodeBlock>              
              <CodeBlock language="python">{apiKeyText + "\n\n" + tabItem.text}</CodeBlock>
            </TabItem>
          );
        })
      }
    </Tabs>
  );
}
