// @refresh reload
import { Suspense } from "solid-js";
import ids from './ids';
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <h1>test</h1>
        <div>
          <ul>
            {ids.map((id) => (
              <li key={id}>
                <a
                  target="_blank"
                  href={`https://ai.feishu.cn/lingo/detail/${id}`}
                >{`https://ai.feishu.cn/lingo/detail/${id}`}</a>
              </li>
            ))}
          </ul>
        </div>
        <Scripts />
      </Body>
    </Html>
  );
}
