import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Auth'
import File from './File'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>

          <Grid.Column width={12}>
            <Routes>
              <Route exact path="/" element={<Auth></Auth>} />
              <Route exact path="/files" element={<File></File>} />

            </Routes>
          </Grid.Column>

        </Grid.Row>

      </Grid>
    </div>
  )
}
