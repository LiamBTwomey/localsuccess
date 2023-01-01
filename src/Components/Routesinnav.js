<div>
      <Routes>
          <Route exact path='/' element={Home} />
          <Route exact path='/contact' element={Contact} />
          <Route render={function () {
              return <p>Not found</p>
          }} />
      </Routes>
      </div>