// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: verTqurZzkaRSaGwvFXmnc
// Component: 8Ud0pBNdU0
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Group from "../../Group"; // plasmic-import: TGRouhUaEx/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_torneio_entre_festas.module.css"; // plasmic-import: verTqurZzkaRSaGwvFXmnc/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 8Ud0pBNdU0/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  group?: p.Flex<typeof Group>;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  dataFetches?: PlasmicHomepage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__nCSnR
            )}
          >
            {"Torneio Entre Festas 2021"}
          </div>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__ywMBm)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bxXCb
                )}
              >
                {"- Fase de Grupos"}
              </div>
            </div>
          ) : null}

          <Group
            data-plasmic-name={"group"}
            data-plasmic-override={overrides.group}
            className={classNames("__wab_instance", sty.group)}
          />

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__qg6CD)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3FyBb
                )}
              >
                {"- Playoffs"}
              </div>
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___4SAdG)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zJury
                )}
              >
                {"Semifinal"}
              </div>
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__owcK)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox___5Ojy)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__t9Tyw
                    )}
                  >
                    {"1o A X 2o B"}
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__bjtzw)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vCi7O
                      )}
                    >
                      {"SF1"}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__iVwGu)}>
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__o8WdO)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___51Om
                    )}
                  >
                    {"1o B X 2o A"}
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__mnzqe)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pqzTe
                      )}
                    >
                      {"SF2"}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__t4Dfs)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k82Jz
                )}
              >
                {"Final"}
              </div>
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__mplLe)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gqNns
                )}
              >
                {"Vencedor SF1 x Vencedor SF2"}
              </div>
            </div>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "group"],
  group: ["group"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  group: typeof Group;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomepage__Fetches;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    group: makeNodeComponent("group"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
