import { Column, Flex, Heading, Meta, Row, Schema, SmartLink, Text } from "@once-ui-system/core";
import { baseURL, about, person, partnerships } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: partnerships.title,
    description: partnerships.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: partnerships.path,
  });
}

const CATEGORY_ORDER = ["Research funding", "Collaborators", "Supervisors"] as const;

export default function Partnerships() {
  const allPartners = getPosts(["src", "app", "partnerships", "posts"]);

  const grouped = CATEGORY_ORDER.reduce(
    (acc, cat) => {
      acc[cat] = allPartners
        .filter((p) => p.metadata.category === cat)
        .sort((a, b) => (a.metadata.order ?? 99) - (b.metadata.order ?? 99));
      return acc;
    },
    {} as Record<string, typeof allPartners>,
  );

  return (
    <Column maxWidth="m" paddingTop="24" gap="80" marginBottom="40">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={partnerships.path}
        title={partnerships.title}
        description={partnerships.description}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {partnerships.title}
      </Heading>
      {CATEGORY_ORDER.map((category) => {
        const partners = grouped[category];
        if (!partners || partners.length === 0) return null;
        return (
          <Column key={category} gap="40">
            <Heading as="h2" variant="heading-strong-l">
              {category}
            </Heading>
            <Column gap="48">
              {partners.map((partner) => (
                <Flex
                  key={partner.slug}
                  gap="xl"
                  s={{ direction: "column" }}
                  fillWidth
                  vertical="start"
                >
                  {partner.metadata.image && (
                    <Flex style={{ minWidth: "180px", maxWidth: "200px", width: "200px", flexShrink: 0 }} s={{ maxWidth: "100%" }}>
                      <img
                        src={partner.metadata.image}
                        alt={partner.metadata.title}
                        style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius: "var(--radius-m)" }}
                      />
                    </Flex>
                  )}
                  <Column gap="8" flex={1}>
                    <Heading as="h3" variant="heading-strong-m">
                      {partner.metadata.title}
                    </Heading>
                    {partner.metadata.subtitle && (
                      <Text variant="label-default-s" onBackground="neutral-weak">
                        {partner.metadata.subtitle}
                      </Text>
                    )}
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {partner.metadata.summary}
                    </Text>
                    {partner.metadata.link && (
                      <Row marginTop="4">
                        <SmartLink
                          href={partner.metadata.link}
                          suffixIcon="arrowUpRightFromSquare"
                          style={{ width: "fit-content" }}
                        >
                          <Text variant="body-default-s">Visit</Text>
                        </SmartLink>
                      </Row>
                    )}
                  </Column>
                </Flex>
              ))}
            </Column>
          </Column>
        );
      })}
    </Column>
  );
}
