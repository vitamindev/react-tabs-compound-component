import React from "react";
import "./styles.css";
import { Tabs } from "./tabs";

export default function App() {
  return (
    <div className="App">
      <h1>Compound Tab Component</h1>

      <h2>Tabs at the top of the content</h2>
      <Tabs orientation="vertical">
        <Tabs.TabHeaders>
          <Tabs.TabHeader>Header 0</Tabs.TabHeader>
          <Tabs.TabHeader>Header 1</Tabs.TabHeader>
          <Tabs.TabHeader>Header 3</Tabs.TabHeader>
        </Tabs.TabHeaders>
        <Tabs.TabContents>
          <Tabs.TabContent>Content 0</Tabs.TabContent>
          <Tabs.TabContent>Content 1</Tabs.TabContent>
          <Tabs.TabContent>
            <div>
              <h2>This is a test</h2>
              <div>The third tab content</div>
              <div>Content can be anything!</div>
            </div>
          </Tabs.TabContent>
        </Tabs.TabContents>
      </Tabs>

      <h2>Tabs at the bottom of the content</h2>
      <Tabs orientation="vertical">
        <Tabs.TabContents>
          <Tabs.TabContent>Content 0</Tabs.TabContent>
          <Tabs.TabContent>Content 1</Tabs.TabContent>
          <Tabs.TabContent>
            <div>
              <h2>This is a test</h2>
              <div>The third tab content</div>
            </div>
          </Tabs.TabContent>
        </Tabs.TabContents>
        <Tabs.TabHeaders>
          <Tabs.TabHeader>Header 0</Tabs.TabHeader>
          <Tabs.TabHeader>Header 1</Tabs.TabHeader>
          <Tabs.TabHeader>Header 3</Tabs.TabHeader>
        </Tabs.TabHeaders>
      </Tabs>

      <h2>Tabs to the left of the content</h2>
      <Tabs orientation="horizontal">
        <Tabs.TabHeaders>
          <Tabs.TabHeader>Header 0</Tabs.TabHeader>
          <Tabs.TabHeader>Header 1</Tabs.TabHeader>
          <Tabs.TabHeader>Header 3</Tabs.TabHeader>
        </Tabs.TabHeaders>
        <Tabs.TabContents>
          <Tabs.TabContent>Content 0</Tabs.TabContent>
          <Tabs.TabContent>Content 1</Tabs.TabContent>
          <Tabs.TabContent>
            <div>
              <h2>This is a test</h2>
              <div>The third tab content</div>
            </div>
          </Tabs.TabContent>
        </Tabs.TabContents>
      </Tabs>

      <h2>Tabs to the right of the content</h2>
      <Tabs orientation="horizontal">
        <Tabs.TabContents>
          <Tabs.TabContent>Content 0</Tabs.TabContent>
          <Tabs.TabContent>Content 1</Tabs.TabContent>
          <Tabs.TabContent>
            <div>
              <h2>This is a test</h2>
              <div>The third tab content</div>
            </div>
          </Tabs.TabContent>
        </Tabs.TabContents>
        <Tabs.TabHeaders>
          <Tabs.TabHeader>Header 0</Tabs.TabHeader>
          <Tabs.TabHeader>Header 1</Tabs.TabHeader>
          <Tabs.TabHeader>Header 3</Tabs.TabHeader>
        </Tabs.TabHeaders>
      </Tabs>
    </div>
  );
}
