import React from "react";
import 'semantic-ui-css/semantic.css';
import { Container, Header, Button, Grid, Segment, Form, Select, ButtonOr, List, Label, GridColumn, } from "semantic-ui-react";

import Task from '../components/Tasks';

const HomePage = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width='4'>
            <Button textAlign='left' icon='bars'></Button>
          </Grid.Column>

          <Grid.Column width='8'>
            <Header textAlign='center' as='h1'>
              Todo List
            </Header>
          </Grid.Column>

          <Grid.Column width='4'>
            <Button textAlign='right' color='green' icon='plus'></Button>
          </Grid.Column>
        </Grid>

        <Segment>
          <Header as='h2'>
            New Task
          </Header>

          <Form>
            <Form.Field
              control='input'
              label='Task Name'
              placeholder='Enter task name...'
            />

            <Form.Field
              control={Select}
              label='Task Color'
              placeholder='Choose task color...'
              options={[
                { text: 'Red', Value: 'red' },
                { text: 'Yellow', Value: 'yellow' },
                { text: 'Green', Value: 'green' },
              ]}
            />

            <Button.Group fluid>

              <Button color='red'>Cancel</Button>

              <ButtonOr />

              <Button color='green'>Add Task</Button>

            </Button.Group>

          </Form>
        </Segment>

        <List>

          <Task name='Task 1' color='yellow'></Task>
          <Task name='Task 2' color='red'></Task>
          <Task name='Task 3' color='green'></Task>

        </List>

      </Container>
    </React.Fragment>
  );
};

export default HomePage;
