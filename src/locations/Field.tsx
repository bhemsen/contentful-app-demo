() => {
  const isInitiallyDisabled = !!window.localStorage.getItem('initialDisabled')
  const instanceParams = window.localStorage.getItem('instanceParams')
  const [sdk, mitt] = newReferenceEditorFakeSdk()
  return (
    <div data-test-id="multiple-references-editor-custom-cards-integration-test">
      <MultipleEntryReferenceEditor
        renderCustomCard={props =>
          props.entity.fields.exField ? (
            <Card testId="custom-card">
              <Heading>{props.entity.fields.exField.en}</Heading>
              <Paragraph>{props.entity.fields.exDesc.en}</Paragraph>
              <Button onClick={props.onEdit} style={{ marginRight: '10px' }}>
                Edit
              </Button>
              <Button onClick={props.onRemove}>Remove</Button>
            </Card>
          ) : (
            false
          )
        }
        viewType="link"
        sdk={sdk}
        isInitiallyDisabled={isInitiallyDisabled}
        parameters={{
          instance: instanceParams || {
            showCreateEntityAction: true,
            showLinkEntityAction: true,
          },
        }}
      />
      <ActionsPlayground mitt={mitt} />
    </div>
  )
}